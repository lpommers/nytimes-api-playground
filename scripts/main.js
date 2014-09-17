
var TIMESAPP = TIMESAPP || {};

//Namespacing function
TIMESAPP.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
			parent = TIMESAPP,
			i;

//strips leading global
	if (parts[0] === 'TIMESAPP') {
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i += 1) {
		//create property if it doesn't exist
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}

		parent = parent[parts[i]];
	}

	return parent;
};

//Module pattern
TIMESAPP.api = (function(){
	apiReponse = function() {
		var call = new XMLHttpRequest(),
				stories;

		call.onreadystatechange = function()
    {
        if (call.readyState == 4 && call.status == 200)
        {
          stories = JSON.parse(call.responseText); // Another callback here
        }
    };
		call.open('GET', 'api.php', false);
		call.send();
		return stories;
	};

	return {
		apiReponse: apiReponse
	};
})();