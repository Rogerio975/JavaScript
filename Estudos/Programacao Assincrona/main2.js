async function escreverInformacoesPais(paisDesejado) {
    const info = await fetch("https://restcountries.com/v3.1/name/" + paisDesejado);
    console.log(await info.json());
}

escreverInformacoesPais("brazil");