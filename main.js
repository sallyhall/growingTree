var intervalID;

var startTree = function () {
  intervalID = window.setInterval(growTree, 2000);
}

var level = 0;
var growTree = function() {
    var branches = document.getElementsByClassName("level"+level);
    level++;
    Array.prototype.filter.call(branches, function(branch) {
        var newBranchLevel = document.createElement("ul");
        newBranchLevel = branch.appendChild(newBranchLevel);

        var branchLeft = document.createElement("li");
        branchLeft.innerHTML = "Branch";
        branchLeft.classList.add("level"+level);
        branchLeft.classList.add("branch");

        var branchRight = document.createElement("li");
        branchRight.innerHTML = "Branch";
        branchRight.classList.add("level"+level);
        branchRight.classList.add("branch");

        branchLeft = newBranchLevel.appendChild(branchLeft);
        branchRight = newBranchLevel.appendChild(branchRight);


        if (level === 10) {
            clearInterval(intervalID);
        }

    });
}

startTree();
