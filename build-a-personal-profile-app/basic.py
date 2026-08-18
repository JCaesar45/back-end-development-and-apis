from itertools import permutations

def find_department_combinations():
    # Generate all permutations of 3 unique numbers from 1 to 7
    all_permutations = permutations(range(1, 8), 3)
    
    # Filter permutations where the sum is 12 and the first number is even
    valid_combinations = [
        combo for combo in all_permutations
        if sum(combo) == 12 and combo[0] % 2 == 0
    ]
    
    return valid_combinations

# Test the function
if __name__ == "__main__":
    combinations = find_department_combinations()
    print("Valid combinations:", combinations)
