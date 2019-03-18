const contractData = [
  {
    "name": "Roles",
    "path": "../node_modules/openzeppelin-eth/contracts/access/Roles.sol",
    "imports": []
  },
  {
    "name": "CapperRole",
    "path": "../node_modules/openzeppelin-eth/contracts/access/roles/CapperRole.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.Roles"
    ]
  },
  {
    "name": "MinterRole",
    "path": "../node_modules/openzeppelin-eth/contracts/access/roles/MinterRole.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.Roles"
    ]
  },
  {
    "name": "PauserRole",
    "path": "../node_modules/openzeppelin-eth/contracts/access/roles/PauserRole.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.Roles"
    ]
  },
  {
    "name": "SignerRole",
    "path": "../node_modules/openzeppelin-eth/contracts/access/roles/SignerRole.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.Roles"
    ]
  },
  {
    "name": "WhitelistAdminRole",
    "path": "../node_modules/openzeppelin-eth/contracts/access/roles/WhitelistAdminRole.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.Roles"
    ]
  },
  {
    "name": "WhitelistedRole",
    "path": "../node_modules/openzeppelin-eth/contracts/access/roles/WhitelistedRole.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.Roles",
      "node_modules.openzeppelin-eth.contracts.access.roles.WhitelistAdminRole"
    ]
  },
  {
    "name": "Crowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/Crowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.IERC20",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.SafeERC20",
      "node_modules.openzeppelin-eth.contracts.utils.ReentrancyGuard"
    ]
  },
  {
    "name": "FinalizableCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/distribution/FinalizableCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.crowdsale.validation.TimedCrowdsale"
    ]
  },
  {
    "name": "PostDeliveryCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/distribution/PostDeliveryCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.crowdsale.validation.TimedCrowdsale",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath"
    ]
  },
  {
    "name": "RefundableCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/distribution/RefundableCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.crowdsale.distribution.FinalizableCrowdsale",
      "node_modules.openzeppelin-eth.contracts.payment.escrow.RefundEscrow"
    ]
  },
  {
    "name": "RefundablePostDeliveryCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/distribution/RefundablePostDeliveryCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.crowdsale.distribution.RefundableCrowdsale",
      "node_modules.openzeppelin-eth.contracts.crowdsale.distribution.PostDeliveryCrowdsale"
    ]
  },
  {
    "name": "AllowanceCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/emission/AllowanceCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.crowdsale.Crowdsale",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.IERC20",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.SafeERC20",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.math.Math"
    ]
  },
  {
    "name": "MintedCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/emission/MintedCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.crowdsale.Crowdsale",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20Mintable"
    ]
  },
  {
    "name": "IncreasingPriceCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/price/IncreasingPriceCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.crowdsale.validation.TimedCrowdsale",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath"
    ]
  },
  {
    "name": "CappedCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/validation/CappedCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.crowdsale.Crowdsale"
    ]
  },
  {
    "name": "IndividuallyCappedCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/validation/IndividuallyCappedCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.crowdsale.Crowdsale",
      "node_modules.openzeppelin-eth.contracts.access.roles.CapperRole"
    ]
  },
  {
    "name": "PausableCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/validation/PausableCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.crowdsale.Crowdsale",
      "node_modules.openzeppelin-eth.contracts.lifecycle.Pausable"
    ]
  },
  {
    "name": "TimedCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/validation/TimedCrowdsale.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.crowdsale.Crowdsale"
    ]
  },
  {
    "name": "WhitelistCrowdsale",
    "path": "../node_modules/openzeppelin-eth/contracts/crowdsale/validation/WhitelistCrowdsale.sol",
    "imports": [
      "node_modules.openzeppelin-eth.contracts.crowdsale.Crowdsale",
      "node_modules.openzeppelin-eth.contracts.access.roles.WhitelistedRole"
    ]
  },
  {
    "name": "ECDSA",
    "path": "../node_modules/openzeppelin-eth/contracts/cryptography/ECDSA.sol",
    "imports": []
  },
  {
    "name": "MerkleProof",
    "path": "../node_modules/openzeppelin-eth/contracts/cryptography/MerkleProof.sol",
    "imports": []
  },
  {
    "name": "Counter",
    "path": "../node_modules/openzeppelin-eth/contracts/drafts/Counter.sol",
    "imports": []
  },
  {
    "name": "TokenMetadata",
    "path": "../node_modules/openzeppelin-eth/contracts/drafts/ERC1046/TokenMetadata.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.IERC20"
    ]
  },
  {
    "name": "ERC20Migrator",
    "path": "../node_modules/openzeppelin-eth/contracts/drafts/ERC20Migrator.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.IERC20",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20Mintable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.SafeERC20",
      "node_modules.openzeppelin-eth.contracts.math.Math"
    ]
  },
  {
    "name": "SignatureBouncer",
    "path": "../node_modules/openzeppelin-eth/contracts/drafts/SignatureBouncer.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.roles.SignerRole",
      "node_modules.openzeppelin-eth.contracts.cryptography.ECDSA"
    ]
  },
  {
    "name": "SignedSafeMath",
    "path": "../node_modules/openzeppelin-eth/contracts/drafts/SignedSafeMath.sol",
    "imports": []
  },
  {
    "name": "TokenVesting",
    "path": "../node_modules/openzeppelin-eth/contracts/drafts/TokenVesting.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.SafeERC20",
      "node_modules.openzeppelin-eth.contracts.ownership.Ownable",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath"
    ]
  },
  {
    "name": "ERC165",
    "path": "../node_modules/openzeppelin-eth/contracts/introspection/ERC165.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.introspection.IERC165"
    ]
  },
  {
    "name": "ERC165Checker",
    "path": "../node_modules/openzeppelin-eth/contracts/introspection/ERC165Checker.sol",
    "imports": []
  },
  {
    "name": "IERC165",
    "path": "../node_modules/openzeppelin-eth/contracts/introspection/IERC165.sol",
    "imports": []
  },
  {
    "name": "Pausable",
    "path": "../node_modules/openzeppelin-eth/contracts/lifecycle/Pausable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.access.roles.PauserRole"
    ]
  },
  {
    "name": "Math",
    "path": "../node_modules/openzeppelin-eth/contracts/math/Math.sol",
    "imports": []
  },
  {
    "name": "SafeMath",
    "path": "../node_modules/openzeppelin-eth/contracts/math/SafeMath.sol",
    "imports": []
  },
  {
    "name": "Ownable",
    "path": "../node_modules/openzeppelin-eth/contracts/ownership/Ownable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable"
    ]
  },
  {
    "name": "Secondary",
    "path": "../node_modules/openzeppelin-eth/contracts/ownership/Secondary.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable"
    ]
  },
  {
    "name": "PaymentSplitter",
    "path": "../node_modules/openzeppelin-eth/contracts/payment/PaymentSplitter.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath"
    ]
  },
  {
    "name": "PullPayment",
    "path": "../node_modules/openzeppelin-eth/contracts/payment/PullPayment.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.payment.escrow.Escrow"
    ]
  },
  {
    "name": "ConditionalEscrow",
    "path": "../node_modules/openzeppelin-eth/contracts/payment/escrow/ConditionalEscrow.sol",
    "imports": [
      "node_modules.openzeppelin-eth.contracts.payment.escrow.Escrow"
    ]
  },
  {
    "name": "Escrow",
    "path": "../node_modules/openzeppelin-eth/contracts/payment/escrow/Escrow.sol",
    "imports": [
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.ownership.Secondary"
    ]
  },
  {
    "name": "RefundEscrow",
    "path": "../node_modules/openzeppelin-eth/contracts/payment/escrow/RefundEscrow.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.payment.escrow.ConditionalEscrow"
    ]
  },
  {
    "name": "ERC20",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/ERC20.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.IERC20",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath"
    ]
  },
  {
    "name": "ERC20Burnable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/ERC20Burnable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20"
    ]
  },
  {
    "name": "ERC20Capped",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/ERC20Capped.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20Mintable"
    ]
  },
  {
    "name": "ERC20Detailed",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/ERC20Detailed.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.IERC20"
    ]
  },
  {
    "name": "ERC20Mintable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/ERC20Mintable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20",
      "node_modules.openzeppelin-eth.contracts.access.roles.MinterRole"
    ]
  },
  {
    "name": "ERC20Pausable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/ERC20Pausable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20",
      "node_modules.openzeppelin-eth.contracts.lifecycle.Pausable"
    ]
  },
  {
    "name": "IERC20",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/IERC20.sol",
    "imports": []
  },
  {
    "name": "SafeERC20",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/SafeERC20.sol",
    "imports": [
      "node_modules.openzeppelin-eth.contracts.token.ERC20.IERC20",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath"
    ]
  },
  {
    "name": "StandaloneERC20",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/StandaloneERC20.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20Detailed",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20Mintable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.ERC20Pausable"
    ]
  },
  {
    "name": "TokenTimelock",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC20/TokenTimelock.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC20.SafeERC20"
    ]
  },
  {
    "name": "ERC721",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721Receiver",
      "node_modules.openzeppelin-eth.contracts.math.SafeMath",
      "node_modules.openzeppelin-eth.contracts.utils.Address",
      "node_modules.openzeppelin-eth.contracts.introspection.ERC165"
    ]
  },
  {
    "name": "ERC721Burnable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721Burnable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721"
    ]
  },
  {
    "name": "ERC721Enumerable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721Enumerable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721Enumerable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721",
      "node_modules.openzeppelin-eth.contracts.introspection.ERC165"
    ]
  },
  {
    "name": "ERC721Full",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721Full.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721Enumerable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721Metadata"
    ]
  },
  {
    "name": "ERC721Holder",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721Holder.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721Receiver"
    ]
  },
  {
    "name": "ERC721Metadata",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721Metadata.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721Metadata",
      "node_modules.openzeppelin-eth.contracts.introspection.ERC165"
    ]
  },
  {
    "name": "ERC721MetadataMintable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721MetadataMintable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721Metadata",
      "node_modules.openzeppelin-eth.contracts.access.roles.MinterRole"
    ]
  },
  {
    "name": "ERC721Mintable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721Mintable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721",
      "node_modules.openzeppelin-eth.contracts.access.roles.MinterRole"
    ]
  },
  {
    "name": "ERC721Pausable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/ERC721Pausable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721",
      "node_modules.openzeppelin-eth.contracts.lifecycle.Pausable"
    ]
  },
  {
    "name": "IERC721",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/IERC721.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.introspection.IERC165"
    ]
  },
  {
    "name": "IERC721Enumerable",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/IERC721Enumerable.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721"
    ]
  },
  {
    "name": "IERC721Full",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/IERC721Full.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721Enumerable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721Metadata"
    ]
  },
  {
    "name": "IERC721Metadata",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/IERC721Metadata.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.IERC721"
    ]
  },
  {
    "name": "IERC721Receiver",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/IERC721Receiver.sol",
    "imports": []
  },
  {
    "name": "StandaloneERC721",
    "path": "../node_modules/openzeppelin-eth/contracts/token/ERC721/StandaloneERC721.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721Enumerable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721Metadata",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721MetadataMintable",
      "node_modules.openzeppelin-eth.contracts.token.ERC721.ERC721Pausable"
    ]
  },
  {
    "name": "Address",
    "path": "../node_modules/openzeppelin-eth/contracts/utils/Address.sol",
    "imports": []
  },
  {
    "name": "Arrays",
    "path": "../node_modules/openzeppelin-eth/contracts/utils/Arrays.sol",
    "imports": [
      "node_modules.openzeppelin-eth.contracts.math.Math"
    ]
  },
  {
    "name": "ReentrancyGuard",
    "path": "../node_modules/openzeppelin-eth/contracts/utils/ReentrancyGuard.sol",
    "imports": [
      "node_modules.zos-lib.contracts.Initializable"
    ]
  },
  {
    "name": "Initializable",
    "path": "../node_modules/zos-lib/contracts/Initializable.sol",
    "imports": []
  },
  {
    "name": "App",
    "path": "../node_modules/zos-lib/contracts/application/App.sol",
    "imports": [
      "node_modules.zos-lib.contracts.application.ImplementationProvider",
      "node_modules.zos-lib.contracts.application.Package",
      "node_modules.zos-lib.contracts.upgradeability.AdminUpgradeabilityProxy",
      "node_modules.zos-lib.contracts.openzeppelin-solidity.ownership.Ownable"
    ]
  },
  {
    "name": "ImplementationDirectory",
    "path": "../node_modules/zos-lib/contracts/application/ImplementationDirectory.sol",
    "imports": [
      "node_modules.zos-lib.contracts.application.ImplementationProvider",
      "node_modules.zos-lib.contracts.openzeppelin-solidity.ownership.Ownable",
      "node_modules.zos-lib.contracts.openzeppelin-solidity.utils.Address"
    ]
  },
  {
    "name": "ImplementationProvider",
    "path": "../node_modules/zos-lib/contracts/application/ImplementationProvider.sol",
    "imports": []
  },
  {
    "name": "Package",
    "path": "../node_modules/zos-lib/contracts/application/Package.sol",
    "imports": [
      "node_modules.zos-lib.contracts.openzeppelin-solidity.ownership.Ownable"
    ]
  },
  {
    "name": "Ownable",
    "path": "../node_modules/zos-lib/contracts/openzeppelin-solidity/ownership/Ownable.sol",
    "imports": []
  },
  {
    "name": "Address",
    "path": "../node_modules/zos-lib/contracts/openzeppelin-solidity/utils/Address.sol",
    "imports": []
  },
  {
    "name": "AdminUpgradeabilityProxy",
    "path": "../node_modules/zos-lib/contracts/upgradeability/AdminUpgradeabilityProxy.sol",
    "imports": [
      "node_modules.zos-lib.contracts.upgradeability.UpgradeabilityProxy"
    ]
  },
  {
    "name": "Proxy",
    "path": "../node_modules/zos-lib/contracts/upgradeability/Proxy.sol",
    "imports": []
  },
  {
    "name": "ProxyAdmin",
    "path": "../node_modules/zos-lib/contracts/upgradeability/ProxyAdmin.sol",
    "imports": [
      "node_modules.zos-lib.contracts.openzeppelin-solidity.ownership.Ownable",
      "node_modules.zos-lib.contracts.upgradeability.AdminUpgradeabilityProxy"
    ]
  },
  {
    "name": "UpgradeabilityProxy",
    "path": "../node_modules/zos-lib/contracts/upgradeability/UpgradeabilityProxy.sol",
    "imports": [
      "node_modules.zos-lib.contracts.upgradeability.Proxy",
      "node_modules.zos-lib.contracts.openzeppelin-solidity.utils.Address"
    ]
  }
]
 module.exports = contractData;