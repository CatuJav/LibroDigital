const {MSICreator}= require('electron-wix-msi');
const path= require('path');

const APP_DIR = path.resolve(__dirname,'./libro-win32-x64');
const OUT_DIR = path.resolve(__dirname,'./windows_installer');

const msiCreator= new MSICreator({
    appDirectory:APP_DIR,
    outputDirectory:OUT_DIR,
    description:"Libro acerca del cuidado del cuerpo",
    exe:'libro',
    manufacturer:'Proyecto de vinculación',
    name:'Cuidados de mi cuerpo',
    version:'1.0.0',
    appIconPath:'./libro-win32-x64/resources/app/src/assets/iconoInicial.ico',
    ui:{
        chooseDirectory:true
    }
});

async function build() {
	await msiCreator.create();
	await msiCreator.compile();
}

build().catch(console.error);