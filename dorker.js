// var imports
var fs = require('fs')
var system = require('system')
var pages = []
var userAgents = [
	"Mozilla/5.0 (X11; Linux i686; rv:40.0) Gecko/20100101 Firefox/40.0",
	"Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16",
	"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
	"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.7 (KHTML, like Gecko) Comodo_Dragon/16.1.1.0 Chrome/16.0.912.63 Safari/535.7",
	"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)"
]

function Google(site)
{
    var web_browser = require('webpage').create()
    var uri = 'http://www.googe.com/'
    var dorks = []
    var query = (site.trim() != '') ? 'site:' + site : ''
    var found_pages = 0
    var timeout = 0
    var captcha_retry_timeout = 0
}