{
  description = "generate font subsets";

  inputs.nixpkgs.url = github:NixOS/nixpkgs/nixos-23.11;

  outputs = { self, nixpkgs }: let 
    system = "x86_64-linux";
    overlays = [
      (final: prev: prev // {lib = prev.lib // import ./lib.nix final;})
    ];
    pkgs = import nixpkgs { inherit system overlays; };
    lib = pkgs.lib;
  in {
    packages.${system}.default = pkgs.stdenvNoCC.mkDerivation {
      name = "nyabla.net-inter-subset";

      # fetch inter 4.0 from github
      src = pkgs.fetchzip {
        url = "https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip";
        stripRoot = false;
        hash = "sha256-hFK7xFJt69n+98+juWgMvt+zeB9nDkc8nsR8vohrFIc=";
      };

      buildInputs = [pkgs.python311Packages.fonttools pkgs.python311Packages.brotli];

      phases = ["unpackPhase" "buildPhase" "installPhase"];

      buildPhase = lib.mkFontsCommand (import ./config.nix);
      installPhase = ''
        mkdir -p $out
        cp *.woff2 $out/
      '';
    };
  };
}
