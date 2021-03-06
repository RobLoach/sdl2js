var extend = require('extend-shallow')

// SDL_video
var SDL_WindowFlags = {
  SDL_WINDOW_FULLSCREEN: 0x00000001,
  SDL_WINDOW_OPENGL: 0x00000002,
  SDL_WINDOW_SHOWN: 0x00000004,
  SDL_WINDOW_HIDDEN: 0x00000008,
  SDL_WINDOW_BORDERLESS: 0x00000010,
  SDL_WINDOW_RESIZABLE: 0x00000020,
  SDL_WINDOW_MINIMIZED: 0x00000040,
  SDL_WINDOW_MAXIMIZED: 0x00000080,
  SDL_WINDOW_INPUT_GRABBED: 0x00000100,
  SDL_WINDOW_INPUT_FOCUS: 0x00000200,
  SDL_WINDOW_MOUSE_FOCUS: 0x00000400,
  SDL_WINDOW_FULLSCREEN_DESKTOP: ( 0x00000001 | 0x00001000 ),
  SDL_WINDOW_FOREIGN: 0x00000800,
  SDL_WINDOW_ALLOW_HIGHDPI: 0x00002000
};

// SDL
var SDL = {
  SDL_INIT_TIMER: 0x00000001,
  SDL_INIT_AUDIO: 0x00000010,
  SDL_INIT_VIDEO: 0x00000020,
  SDL_INIT_JOYSTICK: 0x00000200,
  SDL_INIT_HAPTIC: 0x00001000,
  SDL_INIT_GAMECONTROLLER: 0x00002000,
  SDL_INIT_EVENTS: 0x00004000,
  SDL_INIT_NOPARACHUTE: 0x00100000
};
SDL.SDL_INIT_EVERYTHING = SDL.SDL_INIT_TIMER | SDL.SDL_INIT_AUDIO | SDL.SDL_INIT_VIDEO | SDL.SDL_INIT_JOYSTICK | SDL.SDL_INIT_HAPTIC | SDL.SDL_INIT_GAMECONTROLLER | SDL.SDL_INIT_EVENTS

// SDL_blendmode
var SDL_blendmode = {
  SDL_BLENDMODE_NONE: 0x00000000,
  SDL_BLENDMODE_BLEND: 0x00000001,
  SDL_BLENDMODE_ADD: 0x00000002,
  SDL_BLENDMODE_MOD: 0x00000004
}

// SDL_error
var SDL_errorcode = {
  SDL_ENOMEM: 0,
  SDL_EFREAD: 1,
  SDL_EFWRITE: 2,
  SDL_EFSEEK: 3,
  SDL_UNSUPPORTED: 4,
  SDL_LASTERROR: 5 
};

// SDL_event
var SDL_Event = {
  SDL_RELEASED: 0,
  SDL_PRESSED: 1,
  SDL_FIRSTEVENT: 0,
  SDL_QUIT: 0x100,
  SDL_APP_TERMINATING: 0x101,
  SDL_APP_LOWMEMORY: 0x102,
  SDL_APP_WILLENTERBACKGROUND: 0x103,
  SDL_APP_DIDENTERBACKGROUND: 0x104,
  SDL_APP_WILLENTERFOREGROUND: 0x105,
  SDL_APP_DIDENTERFOREGROUND: 0x106,
  SDL_WINDOWEVENT: 0x200,
  SDL_KEYDOWN: 0x300,
  SDL_KEYUP: 0x301,
  SDL_TEXTEDITING: 0x302,
  SDL_TEXTINPUT: 0x303,
  SDL_MOUSEMOTION: 0x400,
  SDL_MOUSEBUTTONDOWN: 0x401,
  SDL_MOUSEBUTTONUP: 0x402,
  SDL_MOUSEWHEEL: 0x403,
  SDL_JOYAXISMOTION: 0x600,
  SDL_JOYBALLMOTION: 0x601,
  SDL_JOYHATMOTION: 0x602,
  SDL_JOYBUTTONDOWN: 0x603,
  SDL_JOYBUTTONUP: 0x604,
  SDL_JOYDEVICEADDED: 0x605,
  SDL_JOYDEVICEREMOVED: 0x606,
  SDL_CONTROLLERAXISMOTION: 0x650,
  SDL_CONTROLLERBUTTONDOWN: 0x651,
  SDL_CONTROLLERBUTTONUP: 0x652,
  SDL_CONTROLLERDEVICEADDED: 0x653,
  SDL_CONTROLLERDEVICEREMOVED: 0x654,
  SDL_CONTROLLERDEVICEREMAPPED: 0x655,
  SDL_FINGERDOWN: 0x700,
  SDL_FINGERUP: 0x701,
  SDL_FINGERMOTION: 0x702,
  SDL_DOLLARGESTURE: 0x800,
  SDL_DOLLARRECORD: 0x801,
  SDL_MULTIGESTURE: 0x802,
  SDL_CLIPBOARDUPDATE: 0x900,
  SDL_DROPFILE: 0x1000,
  SDL_RENDER_TARGETS_RESET: 0x2000,
  SDL_USEREVENT: 0x8000,
  SDL_LASTEVENT: 0xFFFF
};

var SDL_image = {
  SDL_IMAGE_MAJOR_VERSION: 2,
  SDL_IMAGE_MINOR_VERSION: 0,
  SDL_IMAGE_PATCHLEVEL: 0
}

var SDL_joystick = {}
var SDL_HAT_CENTERED = 0x00;
var SDL_HAT_UP = 0x01;
var SDL_HAT_RIGHT = 0x02;
var SDL_HAT_DOWN = 0x04;
var SDL_HAT_LEFT = 0x08;
var SDL_HAT_RIGHTUP = (SDL_HAT_RIGHT|SDL_HAT_UP);
var SDL_HAT_RIGHTDOWN = (SDL_HAT_RIGHT|SDL_HAT_DOWN);
var SDL_HAT_LEFTUP = (SDL_HAT_LEFT|SDL_HAT_UP);
var SDL_HAT_LEFTDOWN = (SDL_HAT_LEFT|SDL_HAT_DOWN);
SDL_joystick.SDL_HAT_CENTERED = SDL_HAT_CENTERED;
SDL_joystick.SDL_HAT_UP = SDL_HAT_UP;
SDL_joystick.SDL_HAT_RIGHT = SDL_HAT_RIGHT;
SDL_joystick.SDL_HAT_DOWN = SDL_HAT_DOWN;
SDL_joystick.SDL_HAT_LEFT = SDL_HAT_LEFT;
SDL_joystick.SDL_HAT_RIGHTUP = SDL_HAT_RIGHTUP;
SDL_joystick.SDL_HAT_RIGHTDOWN = SDL_HAT_RIGHTDOWN;
SDL_joystick.SDL_HAT_LEFTUP = SDL_HAT_LEFTUP;
SDL_joystick.SDL_HAT_LEFTDOWN = SDL_HAT_LEFTDOWN;


module.exports = extend({}, SDL_WindowFlags, SDL, SDL_blendmode, SDL_errorcode, SDL_Event, SDL_image, SDL_joystick);
