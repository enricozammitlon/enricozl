## Water and plants - Never an easy job
We've all been there; You buy a mint or basil plant from Sainsbury's or Tesco for a fresh addition to your meal but after that, you grow attached. So you start watering the plants and feeling ever more of a professional gardener as you maybe buy them a pot ... a watering can instead of using an empty Lucozade bottle ... or maybe even a plant growth light if you live in cloudy England, like me. But then - **disaster** - you overwater your basil plant, the leaves turn yellow, then brown and just like that you lose your professional gardener license. But what if I told you, there is another way. I was in a similar situation myself and that is why I scoured the internet to find ancient texts describing how to use an Arduino, a water pump and a few other components to produce a self watering system - fantastic!

## What you'll need
1. An Arduino controller, I have used a Mega 2560 but you could use anything. You might not be able to have the LCD screen if you don't have enough pins but the soil moisture sensors only require one analogue pin each.
2. Now, I used a GLCD 128×64 in this tutorial because I happened to have one. In reality a simple 20x4 LCD module will do and will cost less/require less pins. Mind you, you will have to create some sort of loop on the display since you won't be able to see all the plants at once but once you have many plants, that is true for both sizes of displays. You could potentially even get an OLED display which goes for about £6 on Amazon and requires less pins - very nice!
3. A water pump. In my case I use a 12v submersible water pump but realistically it doesn't have to be submersible. You will also need tubes/hoses which will match the pump size - **This is crucial!** . In my case I had to play around *a lot* with electrical tape and plastic padding because when I bought the pump and the tubes I did not pay attention to the sizes. In my defense it doesn't mention sizes anywhere on the pump's specs but that's more reason to look elsewhere. Lesson learnt.
4. You will need a 12V power supply rated for your pump's current. I bought myself a fixed power supply with connectors but realistically you could find one of those small power adaptors from some appliance you don't use anymore and strip the end connectors with a wire stripper.
5. Quite a few wires to connect everything, a push button for an override if you want, and at least 2 breadboards (or solder everything if you're brave - I'm not). On the topic of wires, I would recommend buying 5-10 long wires or making them by cutting them if you have the tools. This will be needed when connecting the water pump away from the rest of the circuitry and also will be needed to connect the soil sensors to the circuitry.
6. Soil moisture sensors which will be the main source of information for how our plants are doing.
7. A 12v relay switch so we can turn on the pump on and off from the Arduino.
8. A 100k Ohm resistor to control the brightness on the GLCD. If you're using an LCD display you might not need this/a lower resitance. If you are using an OLED display you will not need this.

### Shopping List
#### Required
1. [Arduino Mega 2560](https://www.robotshop.com/uk/arduino-mega-2560-microcontroller-rev3.html?gclid=Cj0KCQiAy579BRCPARIsAB6QoIbcJM-ay1gaA-DBrsgTUI0GzCoykv4Q8nXrVGJvYk1iC8FXUx19T1AaAt_pEALw_wcB)
2. [LCD Display](https://www.amazon.co.uk/Youmile-Serial-Module-Shield-Arduino/dp/B07PWWTB94/ref=sr_1_3?dchild=1&keywords=arduino+lcd+display&qid=1604847418&sr=8-3)
3. [Water pump](https://www.amazon.co.uk/gp/product/B07L89V1N6/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
4. [Micro irrigation tubes](https://www.amazon.co.uk/gp/product/B005DQB3C0/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1)
5. [12v Power Supply](https://www.amazon.co.uk/gp/product/B072J97N8T/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
6. [Plug for Power Supply](https://www.amazon.co.uk/gp/product/B00B22TCRW/ref=ppx_yo_dt_b_asin_title_o00_s02?ie=UTF8&psc=1)
7. [Connector for 12v Power Supply](https://www.amazon.co.uk/gp/product/B07RRY5MYZ/ref=ppx_yo_dt_b_asin_title_o00_s02?ie=UTF8&psc=1)
8. [Wires](https://www.amazon.co.uk/gp/product/B01EV70C78/ref=ppx_yo_dt_b_asin_title_o00_s02?ie=UTF8&psc=1)
9. [Small Breadboards](https://www.amazon.co.uk/gp/product/B07VFK5CRP/ref=ppx_yo_dt_b_asin_title_o00_s02?ie=UTF8&psc=1)
10. [Soil moisture sensors](https://www.amazon.co.uk/gp/product/B08GCRZVSR/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
11. [12v Relay Switch](https://www.amazon.co.uk/gp/product/B07Q1H63D6/ref=ppx_yo_dt_b_asin_title_o00_s03?ie=UTF8&psc=1)
12. [100k Ohm Resistor](https://www.amazon.co.uk/gp/product/B07B2SVSJF/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)

#### Optional
1. [Hand Trowel](https://www.amazon.co.uk/gp/product/B002W5V61S/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
2. [Pots](https://www.amazon.co.uk/gp/product/B077RL91Y6/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)

## Schematics and code
For this project I am *not* going to give a step by step how to connect everything since other people (see references) have done it better and clearer than I did and it would just be copy pasting what they did since I followed their tutorial. What I will do is mention a few things that I figured out on my own or that actually did not work for me so I had to change.
1. As I said, pay attention to the sizes of tubes/hoes you intend to use when picking the pump or vice-versa, depending on what you have. Also I have to say that the 12v pump I bought is actually pretty powerful so even if you have to go a few metres vertically and cover a few plants, I would say the pumps have it in them.
2. Long wires are the way to go for pump and sensor connections to separate as much as possible circuitry from water/soil.
3. If it is not clear from the schematics, in the relay switch you will need to connect -ve to Arduino ground, +ve to Arduino 5v **AND** 12V from power supply, IN1 to a pin on the Arduino. On the other side, COM to 12V +ve and NO to Pump +ve.
4. In the code you will see an airValue and waterValue variable. To get these values run a reading of the sensors when cleaned and just sitting on the table and one where it is fully submerged in water.
5. If you are using a GLCD like me make sure everything is connected and that the 100k Ohm resistor is good, otherwise you could end up not seeing anything on the screen and thinking there is something wrong with it. I had to play around a lot with it before it worked.
6. The code is very much optimizable and encapsulated to reuse and reduce code bla bla bla but I honestly just wanted it to work so this will do for now!
7. The instructable tutorial I put in the references is a bit confusing to follow so really I used it as backup in case. Realistically I first connected the GLCD using [1] then the soil mosture sensors using [2] and then the pump and relay using [3]. If you have any questions just reach out!

### The Code
```cpp
    // include the library header
    // no font headers have to be included
    #include <openGLCD.h>
    const int AirValue = 572;
    const int WaterValue = 295;
    int basilSoilMoistureValue = 0;
    int basilSoilMoisturePercent=0;
    int mintSoilMoistureValue = 0;
    int mintSoilMoisturePercent=0;
    const int RELAY_PIN = A7;
    const int OVERRIDE_BUTTON=13;
    int count = 0;

    void setup()
    {
    // Initialize the GLCD
    GLCD.Init();
    pinMode(RELAY_PIN, OUTPUT);
    pinMode(OVERRIDE_BUTTON, INPUT);
    // Select the font for the default text area
    GLCD.SelectFont(System5x7);
    GLCD.CursorTo(0, 0);
    GLCD.print("Basil Soil Mosture:");
    GLCD.CursorTo(0, 2);
    GLCD.print("Mint Soil Mosture:");
    }

    void loop()
    {
    digitalWrite(RELAY_PIN, digitalRead(OVERRIDE_BUTTON));

    if(count==30 || count==0){
    count=0;
    basilSoilMoistureValue = analogRead(A0); //put Sensor insert into soil
    basilSoilMoisturePercent = map(basilSoilMoistureValue, AirValue, WaterValue, 0, 100);
    GLCD.CursorTo(0, 1);
    if(basilSoilMoisturePercent >= 100)
    {
    GLCD.print("100 %");
    }
    else if(basilSoilMoisturePercent <=0)
    {
    GLCD.println("0 %");
    }
    else if(basilSoilMoisturePercent >0 && basilSoilMoisturePercent < 100)
    {
    GLCD.print(basilSoilMoisturePercent);
    GLCD.println("%");
    }
    mintSoilMoistureValue = analogRead(A1); //put Sensor insert into soil
    mintSoilMoisturePercent = map(mintSoilMoistureValue, AirValue, WaterValue, 0, 100);
    GLCD.CursorTo(0, 3);
    if(mintSoilMoisturePercent >= 100)
    {
    GLCD.print("100 %");
    }
    else if(mintSoilMoisturePercent <=0)
    {
    GLCD.println("0 %");
    }
    else if(mintSoilMoisturePercent >0 && mintSoilMoisturePercent < 100)
    {
    GLCD.print(mintSoilMoisturePercent);
    GLCD.println("%");
    }
    }
    count+=1;
    delay(100);
    }
```
## References
1. [Interface GLCD With Arduino : 12 Steps - Instructables](https://www.instructables.com/Interface-GLCD-with-Arduino/)
2. [Interface Capacitive Soil Moisture Sensor with Arduino](https://how2electronics.com/interface-capacitive-soil-moisture-sensor-arduino/)
3. [Control relay switch with Arduino](https://arduinogetstarted.com/tutorials/arduino-controls-pump)
4. [Arduino Plant Watering System Instructable](https://www.instructables.com/Arduino-Plant-Watering-System/)