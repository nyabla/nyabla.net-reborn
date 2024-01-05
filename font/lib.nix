pkgs: with builtins; let
  inherit (pkgs) lib;

  concatCommas = concatStringsSep ",";
  concatLine = concatStringsSep "\n";

  genFonts = { fonts, charsets, features }: map (genFont { inherit charsets features; }) fonts;

  genFont = { charsets, features }: font: concatLine (attrValues ( 
    mapAttrs (genCharset { inherit font features; }) charsets 
  ));
    
  genCharset = { font, features }: charsetName: charsetUnicodes: ''
    pyftsubset ./web/${font}.woff2 \
      --output-file=${font}-${charsetName}.woff2 --flavor=woff2 \
      --unicodes=${concatCommas charsetUnicodes} --layout-features+=${concatCommas features} 
  '';
in {
  mkFontsCommand = config: map genFonts (attrValues config);
}
