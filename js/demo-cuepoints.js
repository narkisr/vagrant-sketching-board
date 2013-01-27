	  registerCue(
	    {state: 'vagrant-demo',
	     name: 'vagrant',
	     slides:{
			  0:  "main interface",
			  18: "boxes",
			  61:  "booting up",
			  142: "logging into",
			  157: "shared folder",
			  177: "halting and destroying"},
			subs:'vagrant-sub',
			vid:'vagrant-vid'})


	  registerCue(
	    {state: 'puppet-demo',
	     name: 'puppet',
	     slides:{
			  2:  "Checking current status",
			  15: "Adding Puppet configuration",
			  28: "Adding a package",
			  47: "Run during reload",
			  120: "Adding from within",
			  142: "Local run"},
			subs:'puppet-sub',
			vid:'puppet-vid'})


	  registerCue(
	    {state: 'opsk-demo',
	     name: 'opsk',
	     slides:{
			  8: "We start by generating a new project",
			  17: "All the files are created within a new git repo",
			  27: "Bundler done installing gems ",
			  32: "Using librarian to install modules",
			  53: "Booting up the VM",
			  125: "Hostname is set",
			  132: "Adding a package", 
			  157: "Using run.sh from /vagrant"},
			subs:'opsk-sub',
		vid:'opsk-vid'})


	registerCue(
	    {state: 'storm-demo',
	     name: 'storm',
	     slides:{
			  2:   "cooking debs",
			  95:  "booting up",
			  142: "nimbus is up", 
			  194: "super_a is up", 
			  249: "super_b is up", 
			  252: "nimbus ui shows two supervisors"},
		subs:'storm-sub',
		vid:'storm-vid'})


	 registerCue(
	    {state: 'packaging-demo',
	     name: 'packaging',
	     slides:{
			 2:  "current status",
			 15:  "cooking in first sandbox",
			 32:  "copying package to /vagrant/local-repo",
			 65: "installing rpm on puppetizied machine"},
		subs:'packaging-sub',
		vid:'packaging-vid'})


	registerCue(
	    {state: 'vagrantdns-demo',
	     name: 'vagrant dns',
	     slides:{ 2:  "initial state",
			  10: "local dns server",
			  27: "booting sandboxes",
			  63: "registration",
			  75: "host ping",
			  95: "sandbox ping"}, 
		subs:'vagrantdns-sub',
		vid:'vagrantdns-vid'})


	function speedup(id){
	  document.getElementById(id).playbackRate += 1.0;
	}

	function speedown(id){
	  document.getElementById(id).playbackRate -= 1.0;
	}

	function registerCue(data){
	  Reveal.addEventListener( data.state, function() {
	   console.log('starting '+ data.name  +'dns demo');
	   cuepoint.pause();
	   cuepoint.init(data.slides,data.subs,data.vid);
	   cuepoint.setTime(0);
	   cuepoint.play();
	});
     }


