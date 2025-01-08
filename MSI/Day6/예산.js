const solution = (d, budget) => {

    d.sort((a, b) => a - b);

    let count = 0;

    let total = 0;

    for (const amount of d) {

        if (total + amount <= budget) {

            total += amount;

            count++;

        } else {

            break;

        }

    }

    return count;

};