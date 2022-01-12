package main

import (
	"embed"
	"io/fs"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pterm/pterm"
)

//go:embed  dist/*
var web embed.FS

func main() {
	r := gin.Default()
	//router.Static("/", "../dist")
	static, err := fs.Sub(fs.FS(web), "dist/assets")
	if err != nil {
		pterm.Warning.Println(err)
	}
	r.StaticFS("/assets", http.FS(static))

	// todo:
	r.StaticFile("/favicon.ico", "./dist/assets/favicon.ico")

	r.GET("/api/login", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello World!")
	})
	r.GET("/", func(c *gin.Context) {
		content, err := web.ReadFile("dist/index.html")
		if err != nil {
			content = []byte("Hello World!")
		}
		c.Writer.Header().Set("Content-Type", "text/html")
		c.String(http.StatusOK, string(content))
	})
	r.Run(":8080")
}
