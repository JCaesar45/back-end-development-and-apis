import java.util.ArrayList;
import java.util.List;

public class DepartmentNumbers {

    public static List<int[]> findDepartmentCombinations() {
        List<int[]> validCombinations = new ArrayList<>();
        
        // Loop through all possible combinations of 3 unique numbers from 1 to 7
        for (int i = 1; i <= 7; i++) {
            for (int j = 1; j <= 7; j++) {
                for (int k = 1; k <= 7; k++) {
                    // Ensure all numbers are unique
                    if (i != j && i != k && j != k) {
                        // Check if the sum is 12 and the first number is even
                        if (i + j + k == 12 && i % 2 == 0) {
                            validCombinations.add(new int[]{i, j, k});
                        }
                    }
                }
            }
        }
        
        return validCombinations;
    }

    public static void main(String[] args) {
        List<int[]> combinations = findDepartmentCombinations();
        System.out.println("Valid combinations:");
        for (int[] combo : combinations) {
            System.out.println("[" + combo[0] + ", " + combo[1] + ", " + combo[2] + "]");
        }
    }
}
