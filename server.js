// https://raw.githubusercontent.com/zphyrj/jsExperiments/main/LICENSE

var express = require('express')
var app = express()
var fs=require('fs')
const args = process.argv.slice(2)
folder = args[0]
folder = folder?folder:__dirname === process.cwd()?'.':process.cwd()+(args[0]??'')

const port = args[1] ?? 2000
console.log(port)
app.use(express.static(folder))
app.use((req, res) => {
    if (res.status(404))
	{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(fs.readFileSync(folder+'/404.html'));
		res.end();
		return;
	}
});
app.listen(port, ()=>{
	console.log('Listening on http://localhost:'+port)
})