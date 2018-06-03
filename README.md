# Smart-phone-based-IOT-Application
A mobile application to collect data through sensors and use them for analysis, visualization and future predictions. 

<img width="254" alt="system architecture" src="https://user-images.githubusercontent.com/26907521/40882446-157c2d0e-6697-11e8-9ec6-3e2094a44989.PNG">


PLATFORM

IBM Bluemix

Bluemix™ is a fully managed, cloud-hosted service designed to simplify and derive value from IoT devices . An application is created on this with
the key steps:
● Deciding a device/ gateway.
● Creating an application on the Bluemix cloud with the selected device (smartphone) and desired service (Transmit and receive data).
● Downloading an application known as IOT starter app on the smartphone used to activate the sensors when application is turned on.
● Securing the communication messages between the device and the cloud using MQTT messaging protocol or HTTP and data using REST and Real time APIs.
● Connecting it to Node – RED to create flow,monitor and analyze.

IBM Watson

Watson on the IBM Cloud is a platform to integrate application with the store, train and manage data being on secure cloud server.

Node-RED

Node Red is a programming tool for wiring together hardware devices, API’s and online services. The browser based editor is used to deploy nodes in their run time.

Smartphone

A device with all the sensors like accelerometer, gyroscope, camera, pulse, proximity, magnetometer, etc. embedded on the same platform to make it easier to run them all together as an IOTdevice.

Command line Interface

The reference model considers cloud foundry as an interface between the device collecting data and the IBM Bluemix for the sole purpose of pushing the data on the cloud Bluemix platform. It is a series of
commands implemented in the command window.To receive alerts on different websites and platforms, a respective account is desired. For example, to tweet on twitter when certain event occurs a twitter account is necessary. Similarly to receive an email notifying an event An email account with SMTP relay capabilities is required.
