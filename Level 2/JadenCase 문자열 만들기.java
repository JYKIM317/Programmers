import java.util.ArrayList;

class Solution {
    public String solution(String s) {
        ArrayList<String> result = new ArrayList<>();
        String[] words = s.split(" ", -1);

        for(String word: words) {
            if(!word.isEmpty()) {
                StringBuilder builder = new StringBuilder(word.toLowerCase());
                builder.setCharAt(0, Character.toUpperCase(builder.charAt(0)));
                result.add(builder.toString());
            } else result.add(word);
        }

        return String.join(" ", result);
    }
}
