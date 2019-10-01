// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Codepac.soy.
 */

goog.provide('Codepac.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Codepac.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Codepac_moveForward">move forward</span><span id="Codepac_turnLeft">turn left</span><span id="Codepac_turnRight">turn right</span><span id="Codepac_doCode">do</span><span id="Codepac_elseCode">else</span><span id="Codepac_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Codepac_pathAhead">if path ahead</span><span id="Codepac_pathLeft">if path to the left</span><span id="Codepac_pathRight">if path to the right</span><span id="Codepac_repeatUntil">repeat until</span><span id="Codepac_moveForwardTooltip">Moves the player forward one space.</span><span id="Codepac_turnTooltip">Turns the player left or right by 90 degrees.</span><span id="Codepac_ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="Codepac_ifelseTooltip">If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.</span><span id="Codepac_whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="Codepac_capacity0">You have %0 blocks left.</span><span id="Codepac_capacity1">You have %1 block left.</span><span id="Codepac_capacity2">You have %2 blocks left.</span></div>';
};
if (goog.DEBUG) {
  Codepac.soy.messages.soyTemplateName = 'Codepac.soy.messages';
}


Codepac.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Codepac.soy.messages(null, null, opt_ijData) + '<table width="100%" style="display: none"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Codepac'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="header"><img class="logo" src="common/logo_built_on.png" height="30px" /></div><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="500px" height="540px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="500"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Makes the player do what the blocks say."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Put the player back at the start of the maze."><img src="common/1x1.gif" class="stop icon21"> Reset Pacman</button></td></tr></table>' + Codepac.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData);
};
if (goog.DEBUG) {
  Codepac.soy.start.soyTemplateName = 'Codepac.soy.start';
}


Codepac.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;" xmlns="https://developers.google.com/blockly/xml"><block type="maze_moveForward"></block><block type="maze_turnLeft"></block><block type="maze_turnRight"></block><block type="maze_repeat"></block></xml>';
};
if (goog.DEBUG) {
  Codepac.soy.toolbox.soyTemplateName = 'Codepac.soy.toolbox';
}
