function onScroll() {
  // console.log("Função Chamada");
  if (scrollY > 0) {    
  navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }

}
