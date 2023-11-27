function removeReeler() {
  const parentDiv = document.querySelector('.x1iyjqo2.xh8yej3');
  if (parentDiv) {
    const fourthChild = parentDiv.querySelector('div:nth-child(4)');
    if (fourthChild && fourthChild.textContent.includes('Reels')) {
      fourthChild.remove();
    }
  }
}

function removeReelPlayback(){
	const reelPlayBackDiv = document.querySelector('.x1pq812k');
	if(reelPlayBackDiv){
		reelPlayBackDiv.remove();
	}
}

function observeMutationsForReelerRemoval() {
  new MutationObserver(mutations => {
    const addedNodes = flattenAddedNodes(mutations);
    if (addedNodes.length > 0) {
      // Reset the flag to handle potential new nodes
      // Call removeReeler only once, outside the loop
      removeReeler();
      removeReelPlayback();
    }
  }).observe(document, { childList: true, subtree: true });
}

function flattenAddedNodes(mutations) {
  let flattenedNodes = [];
  for (const mutation of mutations) {
    if (mutation.addedNodes) {
      flattenedNodes = flattenedNodes.concat(Array.from(mutation.addedNodes));
    }
  }
  return flattenedNodes;
}

function main() {
  removeReeler();
  removeReelPlayback();
  observeMutationsForReelerRemoval();
}

main();
