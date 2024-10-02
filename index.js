function distanceFromHqInBlocks(streetNumber){
    const hq = 42;
    return Math.abs(streetNumber - hq); 
}
function distanceFromHqInFeet(streetNumber) {
    const blocks = distanceFromHqInBlocks(streetNumber);
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances over 2000 feet
    } else if (distance > 2500) {
      return 'cannot travel that far'; // No rides over 2500 feet allowed
    }
  }
  
  
