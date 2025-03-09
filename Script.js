function Contactme(){
    window.location.href='https://www.linkedin.com/in/ravi-raj-tiwari-7770a724b/';
}
function Downloadcv(){
     const file= 'Resume.pdf';
     const a = document.createElement('a');
     a.href = file;
     a.download = 'Resume.pdf';
     a.click();
}
