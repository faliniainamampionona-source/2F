function ps(){
    const nbn = prompt("Entrez tous le nom du produit que vous désiriez (ex: maillot) :");
    if (!nbn) return;
        const hn = Number(prompt("Prix s'il vous plaît :"));
        alert("Votre argent est : " + hn + "Ar");
        const nh = Number (prompt("Le nombre de commande que vous voulez"));
        alert("Vous avez commander " + nh + nbn + " et vous devrez payer "+ (nh*hn) + "Ar" );

}
function sp(){
    const b= prompt("Votre nom");
    alert("Je vous remercie " + b + " d'avoir acheter nos produits😁");

}
function cont(){
  const app = prompt("Aimer vous applez Faliniaina Mampionona?");
  if(app==="oui" || app==="OUI" || app==="Yes" || app==="YES" || app==="yes"){
    alert("Pour l'appeller composer ce numero : 038 69 331 61");
  }else{
    alert("Merçie pour ce test");
  }
}

