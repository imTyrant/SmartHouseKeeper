# SmartHouseKeeper

* The variable ```num``` in ```utils.js``` is dangerous. When both the plus and minus button is pressed, it is increased by one. But some time there are no devices or sensors added in to the array, which may case a index pointing to a ```null``` value.
* The randomness is too simple, which may cause high redundancy, thus, a new **pseudo random mechanism** is needed, and it is too slow to traverse all of possible events.
* Age is not added. Need an implementation.
* Here is an example of collected data: *(1 stands for on/open, 0 stands for off/close, and -1 means the device is not added. And approvement of decision is 1, otherwise 0.)*
```
{
    "aerograph": 0,
    "ac_main": -1,
    "action": -1,
    "alarm_main": -1,
    "temp_main": -1,
    "door": -1,
    "ac_sub2": 0,
    "temp_sub2": 1,
    "window_sub2": 0,
    "ac_sub1": 0,
    "temp_sub1": 0,
    "window_sub1": 0,
    "water_laker": -1,
    "coffee_mac": -1,
    "alarm_kitchen": -1,
    "decision": 1
}
```