import java.util.Stack;

class Solution {
    boolean solution(String s) {
        Stack<String> countStack = new Stack<String>();

        for(char character : s.toCharArray()) {
            if(character == '(') countStack.push("");
            else {
                if(countStack.isEmpty()) return false;
                countStack.pop();
            }
        }

        return countStack.isEmpty();
    }
}
