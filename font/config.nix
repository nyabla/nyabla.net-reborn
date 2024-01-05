let
  charsets = {
    latin = [
      "U+0000-00FF" "U+0131" "U+0152-0153" "U+02BB-02BC"
      "U+02C6" "U+02DA" "U+02DC" "U+0304"
      "U+0308" "U+0329" "U+2000-206F" "U+2074"
      "U+20AC" "U+2122" "U+2191" "U+2193"
      "U+2212" "U+2215" "U+FEFF" "U+FFFD"
    ];
    latinExt = [
      "U+0100-02AF" "U+0304" "U+0308" "U+0329"
      "U+1E00-1E9F" "U+1EF2-1EFF" "U+2020" "U+20A0-20AB"
      "U+20AD-20CF" "U+2113" "U+2C60-2C7F" "U+A720-A7FF"
    ];
  };
  # slashed zero, alternative 1, lowercase L with swish
  features = ["zero" "cv01" "cv05"];
in
{
 inter = {
    inherit charsets features;
    fonts = [
      "Inter-Bold"
      "Inter-BoldItalic"
      "Inter-Regular"
      "Inter-Italic"
      "Inter-Medium"
    ];
  };
  interDisplay = {
    inherit charsets features;
    fonts = [ "InterDisplay-Black" ];
  };
}