﻿window.globalProvideData('slide', '{"title":"The correct definition of  instructional design is a science based on describing theoretical principles and practical procedures related to the preparation of educational programs in a way that achieves the set goals.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":8,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"62SqYBpgDlq","lmsId":"Slide8","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5bKbLeNmIb2","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"65VPC7jCgx2.6MDqsPsjKL6.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"65VPC7jCgx2.6hkWXcr0xHG.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5zbk8KxHro8"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5ymQ1Vlh0JK.InvalidPromptSlide"}}]}]},"ReviewInt_65VPC7jCgx2":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"65VPC7jCgx2.6MDqsPsjKL6"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"65VPC7jCgx2.6hkWXcr0xHG"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5zbk8KxHro8.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65VPC7jCgx2_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65VPC7jCgx2_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_65VPC7jCgx2","typea":"var","valueb":"6MOwitzMiTV","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10111101101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MOwitzMiTV.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_65VPC7jCgx2"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MOwitzMiTV.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_65VPC7jCgx2"}]}]}]},"ReviewIntCorrectIncorrect_65VPC7jCgx2":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"65VPC7jCgx2.6MDqsPsjKL6.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65VPC7jCgx2.6MDqsPsjKL6"}}]},{"kind":"adjustvar","variable":"65VPC7jCgx2.6MDqsPsjKL6._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"65VPC7jCgx2.6MDqsPsjKL6._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"65VPC7jCgx2.6MDqsPsjKL6._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"65VPC7jCgx2.6MDqsPsjKL6.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"65VPC7jCgx2.6MDqsPsjKL6"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"65VPC7jCgx2.6hkWXcr0xHG"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_65VPC7jCgx2":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_65VPC7jCgx2"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111101101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111101101"}]}]},"DisableChoices_65VPC7jCgx2":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"65VPC7jCgx2.6MDqsPsjKL6.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"65VPC7jCgx2.6hkWXcr0xHG.ActGrpSetDisabledState"}]},"65VPC7jCgx2_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5zbk8KxHro8.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6MOwitzMiTV.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_65VPC7jCgx2"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5zbk8KxHro8.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5zbk8KxHro8.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_65VPC7jCgx2"}]}]}]}]},"SetLayout_pxabnsnfns10111101101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111101101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111101101"}]}]},"NavigationRestrictionNextSlide_5bKbLeNmIb2":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6UX149ZlrtV"}}]},"NavigationRestrictionPreviousSlide_5bKbLeNmIb2":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111101101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111101101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ymQ1Vlh0JK","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ymQ1Vlh0JK","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_65VPC7jCgx2","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_65VPC7jCgx2"}],"elseActions":[{"kind":"exe_actiongroup","id":"65VPC7jCgx2_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_65VPC7jCgx2","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_65VPC7jCgx2","typea":"var","valueb":"6MOwitzMiTV","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MOwitzMiTV"},"completed_slide_ref":{"type":"string","value":"_player.60RhM6lBS6F.69vZETgUuAi"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_65VPC7jCgx2","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_65VPC7jCgx2","typea":"var","valueb":"6MOwitzMiTV","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MOwitzMiTV"},"completed_slide_ref":{"type":"string","value":"_player.60RhM6lBS6F.69vZETgUuAi"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5bKbLeNmIb2"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5bKbLeNmIb2"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65VPC7jCgx2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65VPC7jCgx2.6hkWXcr0xHG"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65VPC7jCgx2.6MDqsPsjKL6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6YfEogxpFGO"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":888,"contentheight":92,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6S7rrvYY5Sh_1284853445","id":"01","linkId":"txt__default_6hkWXcr0xHG","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":801,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"False","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":81,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":73}}}],"shapemaskId":"","xPos":24,"yPos":46,"tabIndex":3,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}}],"width":864,"height":46,"resume":true,"useHandCursor":true,"id":"6hkWXcr0xHG","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6MDqsPsjKL6.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6MDqsPsjKL6._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6MDqsPsjKL6"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5w89dCgEJup_-1858886138","id":"01","linkId":"txt__default_6MDqsPsjKL6","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":801,"height":22,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":78,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":74}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":2,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":68}},"html5data":{"xPos":-9,"yPos":-1,"width":873,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":68}},"html5data":{"xPos":-9,"yPos":-1,"width":873,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":70}},"html5data":{"xPos":-9,"yPos":-1,"width":873,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":70}},"html5data":{"xPos":-9,"yPos":-1,"width":873,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":864,"bottom":46,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":-1,"yPos":-1,"width":865,"height":47,"strokewidth":3}}}],"width":864,"height":46,"resume":true,"useHandCursor":true,"id":"6MDqsPsjKL6","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6hkWXcr0xHG.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6hkWXcr0xHG._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6hkWXcr0xHG"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":24,"yPos":143,"tabIndex":1,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":179.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":864,"height":359,"strokewidth":0}},"width":888,"height":359,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":888,"bottom":359,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":81}}},"id":"65VPC7jCgx2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6YfEogxpFGO_-1415731096","id":"01","linkId":"txt__default_6YfEogxpFGO","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":844,"height":101,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"The correct definition of  instructional design is a science based on describing theoretical principles and practical procedures related to the preparation of educational programs in a way that achieves the set goals.","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.201}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":217,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":852,"bottom":106,"pngfb":false,"pr":{"l":"Lib","i":188}}}],"shapemaskId":"","xPos":48,"yPos":22,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":55.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":864,"bottom":111,"altText":"The correct definition of  instructional design is a science based on describing theoretical principles and practical procedures related to the preparation of educational programs in a way that achieves the set goals.","pngfb":false,"pr":{"l":"Lib","i":82}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":111,"strokewidth":0}},"width":864,"height":111,"resume":true,"useHandCursor":true,"id":"6YfEogxpFGO"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"65VPC7jCgx2_CorrectReview","id":"01","linkId":"65VPC7jCgx2_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":522,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":78}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":77}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"65VPC7jCgx2_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"65VPC7jCgx2_IncorrectReview","id":"01","linkId":"65VPC7jCgx2_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":531,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":80}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":79}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"65VPC7jCgx2_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"62SqYBpgDlq","duration":1750,"hidetextatstart":true,"animateshapewithtext":false,"pushdirection":"right","tweens":[{"kind":"tween","time":0,"duration":1750,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"-960","y":"0","dx":"0","dy":"0"},"anchorb":{"x":"0","y":"0","dx":"0","dy":"0"}}],"duration":1750,"easing":"exponetial","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');