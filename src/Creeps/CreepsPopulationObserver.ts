export default interface CreepsPopulationObserver {
  populationLimit: number;
  getPopulation(): number;
}
