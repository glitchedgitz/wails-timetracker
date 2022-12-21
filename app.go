package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

var hour = 0
var minute = 0
var stop bool

func check(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

var dirname, _ = os.UserConfigDir()
var configFolder = path.Join(dirname, "timetracker")
var file = path.Join(configFolder, "time")

func (a *App) Initialize() {
	err := os.Mkdir(configFolder, os.ModePerm)
	check(err)

	if _, err := os.Stat(file); err == nil {
		data, err := ioutil.ReadFile(file)
		check(err)

		s := strings.Split(string(data), ":")
		hour, err = strconv.Atoi(s[0])
		check(err)
		minute, err = strconv.Atoi(s[1])
		check(err)

	} else {
		check(err)
		a.saveFile()
	}

	runtime.EventsEmit(a.ctx, "time", hour, minute)
}

func (a *App) Start() {
	stop = false
	a.Update()
}
func (a *App) Stop() {
	stop = true
}

// func (a *App) StartTicker() {
// 	ticker := time.NewTicker(1 * time.Minute)

// 	done := make(chan bool)

// 	go func() {
// 		for {
// 			select {
// 			case <-done:
// 				return
// 			case t := <-ticker.C:
// 				fmt.Println("Tick at", t)
// 			}
// 		}
// 	}()

// 	time.Sleep(1600 * time.Millisecond)
// 	ticker.Stop()
// 	done <- true
// 	fmt.Println("Ticker stopped")
// }

func (a *App) SetTime(h, m int) {
	hour = h
	minute = m
}

func (a *App) Update() {

	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		for {
			time.Sleep(1 * time.Minute)

			if stop {
				break
			}

			if minute == 60 {
				hour += 1
				minute = 0
			} else {
				minute += 1
			}

			runtime.EventsEmit(a.ctx, "time", hour, minute)

		}
		wg.Done()
	}()
	wg.Wait()
}

func (a *App) SaveFile(data string) {
	// data := strconv.Itoa(hour) + ":" + strconv.Itoa(minute)
	_ = os.Mkdir(configFolder, os.ModePerm)
	_ = ioutil.WriteFile(file, []byte(data), 0644)
}

// Greet returns a greeting for the given name
// func (a *App) CreateProject(name string) string {
// 	return fmt.Sprintf("Hello %s, It's show time!", name)
// }

// func getLocalFile(m map[string][]string) {
// 	if len(os.Getenv("COOK")) > 0 {
// 		ConfigFolder = os.Getenv("COOK")
// 	}

// 	localfile := path.Join(ConfigFolder, "info.yaml")
// 	ReadInfoYaml(localfile, m)
// }
