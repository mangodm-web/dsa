class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_count_map, t_count_map = {}, {}

        for char in s:
            s_count_map[char] = s_count_map.get(char, 0) + 1
        for char in t:
            t_count_map[char] = t_count_map.get(char, 0) + 1

        return s_count_map == t_count_map
