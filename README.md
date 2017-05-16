# ionic_project

Below is the necessary software required to install in the system to build any ionic app

1.npm
2.ionic
3.cordova

and emulater or physical device for deployment.

How to configure the app for IOS device

1.Take a clone of the repositery in local MAC system. Note:- IOS mobile app deployment can only happen in MAC OS and if you have a apple's developer ID.

2.After cloning goto the project directry cd New_todo and add ios platform with this command "ionic platform add ios". 

3.After adding IOS platform build the application with this command "ionic build ios".

4.Open the application with XCODE by navigating {project}/platforms/ios/*.xcodeproj. and include the signing info(Developer ID) and deployment info in XCODE.

5.Run the application with the command "ionic run ios" if a physical device is connected it will take it from that device or else emulater.


How to configure the app for Android device

1.Take a clone of the repositery in local system.

2.After cloning goto the project directry cd New_todo and add android platform with this command "ionic platform add android".

3.After adding android platform build the application with this command "ionic build android".

4.Run the application with the command "ionic run android" if a physical device is connected it will take it from that device or else emulater.




