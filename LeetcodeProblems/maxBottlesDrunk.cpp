class Solution {
public:
    int maxBottlesDrunk(int numBottles, int numExchange) {
        int drunk = numBottles;  // initially drink all
        int empty = numBottles;

        while (empty >= numExchange) {
            // exchange empties for 1 full bottle
            empty -= numExchange;
            drunk += 1;          // drink new bottle
            empty += 1;          // it becomes empty
            numExchange += 1;    // cost increases
        }

        return drunk;
    }
};
