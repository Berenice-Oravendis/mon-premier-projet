const tips = [
  "🧘 Respire profondément pendant 3 minutes en fermant les yeux.",
  "🗂️ Fais une to-do list pour te libérer l’esprit.",
  "🚶‍♂️ Prends une pause et marche 5 minutes à l’extérieur.",
  "💧 Bois un grand verre d’eau et détends-toi quelques instants.",
  "📵 Éloigne-toi des écrans pendant 10 minutes.",
  "🎧 Écoute de la musique apaisante ou un podcast motivant.",
  "📚 Lis une citation inspirante pour retrouver le calme.",
  "🧠 Recentre-toi sur ce que tu peux contrôler, pas sur ce que tu ne peux pas."
];

document.getElementById('showTip').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * tips.length);
  const tip = tips[randomIndex];

  const tipContainer = document.getElementById('tip');
  tipContainer.textContent = tip;
  tipContainer.style.display = 'block';
});
