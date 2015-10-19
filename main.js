var intervalID;

var startTree = function () {
  intervalID = window.setInterval(growTree, 2000);
}

var level = 1;
var growTree = function() {
    var branches = document.getElementsByClassName("branch");
    Array.prototype.filter.call(branches, function(branch) {
        var newBranchLevel = document.createElement("ul");
        newBranchLevel = branch.appendChild(newBranchLevel);
        var branchLeft = document.createElement("li");
        branchLeft.innerHTML = "Branch";
        branchLeft.classList.add("branch");
        var branchRight = document.createElement("li");
        branchRight.innerHTML = "Branch";
        branchRight.classList.add("branch");
        branchLeft = newBranchLevel.appendChild(branchLeft);
        branchRight = newBranchLevel.appendChild(branchRight);

        level++;
        if (level === 10) {
            clearInterval(intervalID);
        }

    });
}

startTree();
