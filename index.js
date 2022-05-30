function findMatching(drivers, name){
    const result = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
    return result;
}

function fuzzyMatch(drivers, name){
    const result = drivers.filter(driver => driver.startsWith(name))
    return result;
}

function matchName(drivers, name){
    const result = drivers.filter(driver => driver.name === name)
    return result;
}
/*
  describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
      const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      expect(matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]);
    });
  });
});
*/