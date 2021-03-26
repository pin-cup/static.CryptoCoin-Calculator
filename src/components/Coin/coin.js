"use strict";

/*
  There are
  Some functions
  For #coin block
  And some initialization for #coin
  Add inputs Heandlers
*/

/**
 * await get_CoinGecko("ping");
 *
 * @param {*} res response "ping", "coins/list", "events" ...
 * @returns {Promise} coingecko.com api answer
 */
function get_CoinGecko(res) {
  return fetch(`https://api.coingecko.com/api/v3/${res}`) //
    .then((response) => response.json())
    .catch((error) => err(error + "\nResponse: " + res));
}
// ["ping", "events"].forEach(async (res) =>
//   console.log(await get_CoinGecko(res))
// );

/**
 * const a = sortBit([{tag},{tag},{tag}], tag);
 * @param {Array} db
 * @param {String} tag or symbol
 * @returns Array
 */
function sortBit(db, tag) {
  return db.sort(function (a, b) {
    if (a[tag] > b[tag]) {
      return 1;
    }
    if (a[tag] < b[tag]) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
}

const $Coin = document.getElementById("coin");

// Add heandler to input "More" coins
const input_more = $Coin.querySelector(".coins__input-more");
input_more.addEventListener("click", createCoinsList, false);

// Add heandler to search inputs
["id", "symbol", "name"].forEach((placeholder) => {
  const input = $Coin.querySelector(`input[placeholder="${placeholder}"]`);
  input.addEventListener("change", searchInCoinsList, false);
});
