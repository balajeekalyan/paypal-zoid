# paypal-zoid
Rendering PayPal buttons inside Zoid iFrame

After cloning the project, please add "Live Server" Visual Studio extension to run the project.

When running http://local_server_ip:port/paypal.html

Able to see the following PayPal scripts load.

https://www.sandbox.paypal.com/credit-presentment/experiments/local
https://www.paypalobjects.com/upstream/bizcomponents/sandbox/versioned/smart-credit-message@1.48.0.js
https://www.sandbox.paypal.com/credit-presentment/log?disableSetCookie=true&features=disable-set-cookie

When running http://local_server_ip:port/index.html which has the paypal.html loading it in Zoid iFrame.

Above mentioned endpoints/scripts are not loading.
