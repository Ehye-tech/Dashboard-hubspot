async function compareTimeStamps(data) {
    // console.log(`[compareTimeStamps func]: data: ${data}`)
    const output = {};
    for (const [key, items] of Object.entries(data)) {
      items.sort((a, b) => a.timeStamp - b.timeStamp);
      let currTimeStamp = items[0].timeStamp;
      let currGroup = [];
      const group = [];
      for (const item of items) {
        let diff = item.timeStamp - currTimeStamp;
        if (diff <= 600000) {
          currGroup.push(item.id);
        } else {
          if (currGroup.length == 1) {
            diff = 0;
          }
          group.push({
            duration: diff,
            ids: currGroup,
            start: currTimeStamp,
          });
          currTimeStamp = item.timeStamp;
          currGroup = [item.id];
        }
      }
  
      if (currGroup.length > 0) {
        group.push({
          duration: 0,
          ids: currGroup,
          start: currTimeStamp,
        });
      }
  
      output[key] = group;
    }
    return output;
  }


module.exports = {
  compareTimeStamps
};
