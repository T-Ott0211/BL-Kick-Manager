const API_KEY = process.env.API_FOOTBALL_KEY;

async function main() {
  const res = await fetch('https://v3.football.api-sports.io/teams?league=78&season=2026', {
    headers: { 'x-apisports-key': API_KEY }
  });
  const data = await res.json();
  data.response.forEach(t => console.log(`${t.team.id}\t${t.team.name}`));
}
main();
