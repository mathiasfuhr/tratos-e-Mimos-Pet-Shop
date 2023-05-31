function redirectToWhatsApp() {
    let empresa = "Tratos e Mimos Pet Shop";
    let mensagem = "Olá, gostaria de mais informações sobre seus produtos/serviços.";
    let encodedEmpresa = encodeURIComponent(empresa);
    let encodedMensagem = encodeURIComponent(mensagem);
    window.open('https://api.whatsapp.com/send?phone=55992046143&text=' + encodedEmpresa + ': ' + encodedMensagem, '_blank');
  }



  