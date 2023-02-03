export const getProfil = () => {
    return JSON.parse(localStorage.getItem("profil"));
  }
  
  export const getTokenExpirationDate = () => {
    const profil = getProfil();
    const splits = profil.expirationDate.split(" ");
    const yearSplits = splits[0].split("-");
    const timeSplits = splits[1].split(":");
    const year = yearSplits[0];
    const month = yearSplits[1] - 1;
    const day = yearSplits[2];
    const hour = timeSplits[0];
    const minute = timeSplits[1];
    const second = timeSplits[2];
    return new Date(year, month, day, hour, minute, second);
  }