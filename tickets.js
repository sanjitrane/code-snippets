function Clerk(name){
    this.name = name;

    this.money = {
        25: 0,
        50:0,
        100:0
    };

    this.sell = function(bill){
        this.money[bill]++
        switch(bill){
            case 25:
                return true;
            case 50:
                this.money[25]--;
                break;
            case 100:
                this.money[50] ? this.money[50]-- : this.money[25]-=2;
                this.money[25]--;
                break;
        }
        return this.money[25] >= 0
    }
}

function tickets(people){
    let clerk = new Clerk('vyasa');
    return people.every(clerk.sell.bind(clerk)) ? "YES":"NO";
}