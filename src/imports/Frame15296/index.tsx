type SegmentedControlButtonBaseProps = {
  className?: string;
  cornerRadius?: "round";
  showFocusIndicator?: boolean;
  showIcon?: boolean;
  showLabel?: boolean;
  size?: "md" | "lg";
  width?: "fill";
};

function SegmentedControlButtonBase({ className, cornerRadius = "round", showFocusIndicator = false, showIcon = true, showLabel = true, size = "md", width = "fill" }: SegmentedControlButtonBaseProps) {
  const isLgAndFillAndRound = size === "lg" && width === "fill" && cornerRadius === "round";
  const isMdAndFillAndRound = size === "md" && width === "fill" && cornerRadius === "round";
  return (
    <div className={className || "relative rounded-[800px] w-[107px]"}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className={`content-stretch flex items-center justify-center relative size-full ${isLgAndFillAndRound ? "gap-[8px] px-[20px] py-[14px]" : "gap-[6px] px-[12px] py-[8px]"}`}>
          {isMdAndFillAndRound && showFocusIndicator && (
            <div className="-translate-y-1/2 absolute h-[36px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
              <div className="-translate-x-1/2 absolute bottom-[4px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[32px]">
                <div className="flex-none rotate-90">
                  <div className="bg-[#36f] h-[32px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                </div>
              </div>
            </div>
          )}
          {isMdAndFillAndRound && <div className="absolute inset-0 opacity-0" data-name="interactive" />}
          {isMdAndFillAndRound && showIcon && (
            <div className="relative shrink-0" data-name="sl-icon">
              <div className="content-stretch flex items-start relative size-full">
                <div className="relative shrink-0" data-name="SL-icon/md">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                              <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                <p className="leading-[16px]">universal-access</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isMdAndFillAndRound && showLabel && (
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Label</p>
            </div>
          )}
          {isLgAndFillAndRound && showFocusIndicator && (
            <div className="-translate-y-1/2 absolute h-[48px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
              <div className="-translate-x-1/2 absolute bottom-[6px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[36px]">
                <div className="flex-none rotate-90">
                  <div className="bg-[#36f] h-[36px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                </div>
              </div>
            </div>
          )}
          {isLgAndFillAndRound && <div className="absolute inset-0 opacity-0" data-name="interactive" />}
          {isLgAndFillAndRound && showIcon && (
            <div className="relative shrink-0" data-name="sl-icon">
              <div className="content-stretch flex items-start relative size-full">
                <div className="relative shrink-0" data-name="SL-icon/md">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                              <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                <p className="leading-[16px]">universal-access</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isLgAndFillAndRound && showLabel && (
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Label</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type SegmentedControlButtonProps = {
  className?: string;
  cornerRadius?: "round";
  emphasis?: "bold" | "subtle";
  selected?: boolean;
  size?: "md" | "lg";
  state?: "idle" | "hover" | "active";
  variant?: "icon & text" | "icon only";
  width?: "fixed";
};

function SegmentedControlButton({ className, cornerRadius = "round", emphasis = "bold", selected = false, size = "md", state = "idle", variant = "icon & text", width = "fixed" }: SegmentedControlButtonProps) {
  if (variant === "icon & text" && emphasis === "subtle" && state === "idle" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=idle, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "idle" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=idle, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "idle" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=idle, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "idle" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=idle, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <SegmentedControlButtonBase className="flex-[1_0_0] min-w-px relative rounded-[800px]" size="lg" />
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "idle" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=idle, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "idle" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=idle, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "idle" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=idle, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "idle" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=idle, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "idle" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=idle, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[36px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[4px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[32px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[32px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "idle" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=idle, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "idle" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=idle, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[36px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[4px] flex h-[3px] items-center justify-center left-1/2 w-[12px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[12px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "idle" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=idle, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "idle" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=idle, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[48px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[6px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[36px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[36px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "idle" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=idle, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "idle" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=idle, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[48px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[6px] flex h-[3px] items-center justify-center left-1/2 w-[16px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[16px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "hover" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=hover, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "hover" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=hover, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "hover" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=hover, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "hover" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=hover, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "hover" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=hover, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "hover" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=hover, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "hover" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=hover, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "hover" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=hover, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "hover" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=hover, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "hover" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=hover, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[36px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[4px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[32px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[32px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "hover" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=hover, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "hover" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=hover, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[36px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[4px] flex h-[3px] items-center justify-center left-1/2 w-[12px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[12px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "hover" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=hover, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "hover" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=hover, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[48px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[6px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[36px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[36px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "hover" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=hover, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "hover" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "cursor-pointer h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=hover, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[48px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[6px] flex h-[3px] items-center justify-center left-1/2 w-[16px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[16px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-15" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "active" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=active, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "active" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=active, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "active" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=active, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "active" && !selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=active, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "active" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=active, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "active" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=active, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "active" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=active, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#222] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "active" && !selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=active, selected=false, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#818b98] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "active" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=active, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "active" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=active, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[36px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[4px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[32px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[32px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "active" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=active, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "active" && selected && size === "md" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[36px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=active, selected=true, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[36px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[4px] flex h-[3px] items-center justify-center left-1/2 w-[12px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[12px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "bold" && state === "active" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=active, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon & text" && emphasis === "subtle" && state === "active" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=subtle, state=active, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[48px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[6px] flex h-[3px] items-center justify-center left-[calc(50%-0.5px)] w-[36px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[36px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#393f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "bold" && state === "active" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=bold, state=active, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[#36f] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="absolute bg-[#141a57] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] text-center text-white">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "icon only" && emphasis === "subtle" && state === "active" && selected && size === "lg" && width === "fixed" && cornerRadius === "round") {
    return (
      <div className={className || "h-[48px] relative w-[80px]"} data-name="variant=icon only, emphasis=subtle, state=active, selected=true, ↕️ - size=lg, ↔️ - width=fixed, corner radius=round">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="bg-[rgba(51,102,255,0.2)] flex-[1_0_0] h-full min-w-px relative rounded-[800px]" data-name="_segmented-control-button-base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[14px] relative size-full">
                  <div className="-translate-y-1/2 absolute h-[48px] left-0 right-0 top-1/2" data-name="_segmented-control-indicator">
                    <div className="-translate-x-1/2 absolute bottom-[6px] flex h-[3px] items-center justify-center left-1/2 w-[16px]">
                      <div className="flex-none rotate-90">
                        <div className="bg-[#36f] h-[16px] relative rounded-[2px] w-[3px]" data-name="indicator" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#598eff] inset-0 opacity-25" data-name="interactive" />
                  <div className="relative shrink-0" data-name="sl-icon">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-name="SL-icon/md">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[16px]" data-name="Base/Icon">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center relative size-full">
                                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="icon-container">
                                    <div className="[word-break:break-word] absolute flex flex-col font-['Font_Awesome_7_Pro:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#393f46] text-[16px] text-center">
                                      <p className="leading-[16px]">universal-access</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative w-[80px]"} data-name="variant=icon & text, emphasis=bold, state=idle, selected=false, ↕️ - size=md, ↔️ - width=fixed, corner radius=round">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <SegmentedControlButtonBase className="flex-[1_0_0] min-w-px relative rounded-[800px]" />
        </div>
      </div>
    </div>
  );
}
type SlSegmentedControlApproachProps = {
  className?: string;
  control3?: boolean;
  control4?: boolean;
  control5?: boolean;
  emphasis?: "bold" | "subtle";
  shape?: "round";
  size?: "lg" | "md";
  type?: "outline";
  variant?: "icon + text" | "icon only";
  width?: "fixed";
};

function SlSegmentedControlApproach({ className, control3 = true, control4 = true, control5 = true, emphasis = "bold", shape = "round", size = "lg", type = "outline", variant = "icon + text", width = "fixed" }: SlSegmentedControlApproachProps) {
  const isIconOnlyAndBoldAndLgAndFixed = variant === "icon only" && emphasis === "bold" && size === "lg" && width === "fixed";
  const isIconOnlyAndBoldAndMdAndFixed = variant === "icon only" && emphasis === "bold" && size === "md" && width === "fixed";
  const isIconOnlyAndFixed = variant === "icon only" && width === "fixed";
  const isIconOnlyAndLgAndFixed = variant === "icon only" && size === "lg" && width === "fixed";
  const isIconOnlyAndMdAndFixed = variant === "icon only" && size === "md" && width === "fixed";
  const isIconOnlyAndSubtleAndLgAndFixed = variant === "icon only" && emphasis === "subtle" && size === "lg" && width === "fixed";
  const isIconOnlyAndSubtleAndMdAndFixed = variant === "icon only" && emphasis === "subtle" && size === "md" && width === "fixed";
  const isIconTextAndBoldAndLgAndFixed = variant === "icon + text" && emphasis === "bold" && size === "lg" && width === "fixed";
  const isIconTextAndBoldAndMdAndFixed = variant === "icon + text" && emphasis === "bold" && size === "md" && width === "fixed";
  const isIconTextAndSubtleAndLgAndFixed = variant === "icon + text" && emphasis === "subtle" && size === "lg" && width === "fixed";
  const isIconTextAndSubtleAndMdAndFixed = variant === "icon + text" && emphasis === "subtle" && size === "md" && width === "fixed";
  const isLgAndFixed = size === "lg" && width === "fixed";
  const isSubtleAndFixed = emphasis === "subtle" && width === "fixed";
  return (
    <div className={className || `bg-white relative rounded-[800px] w-[500px] ${size === "md" && width === "fixed" ? "h-[44px]" : "h-[56px]"}`}>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[800px] ${isSubtleAndFixed ? "border-[#dae0e7]" : "border-[#818b98]"}`} />
      <div className="content-stretch flex gap-[6px] items-start p-[4px] relative size-full">
        <SegmentedControlButton className={`flex-[1_0_0] min-w-px relative ${isIconOnlyAndMdAndFixed ? "h-[36px]" : isIconOnlyAndLgAndFixed ? "h-[48px]" : ""}`} emphasis={isSubtleAndFixed ? "subtle" : undefined} selected size={isLgAndFixed ? "lg" : undefined} variant={isIconOnlyAndFixed ? "icon only" : undefined} />
        <SegmentedControlButton className={`flex-[1_0_0] min-w-px relative ${isIconOnlyAndMdAndFixed ? "h-[36px]" : isIconOnlyAndLgAndFixed ? "h-[48px]" : ""}`} emphasis={isSubtleAndFixed ? "subtle" : undefined} size={isLgAndFixed ? "lg" : undefined} variant={isIconOnlyAndFixed ? "icon only" : undefined} />
        {isIconTextAndBoldAndLgAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" size="lg" />}
        {isIconTextAndBoldAndLgAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" size="lg" />}
        {isIconTextAndBoldAndLgAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" size="lg" />}
        {isIconTextAndSubtleAndLgAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" emphasis="subtle" size="lg" />}
        {isIconTextAndSubtleAndLgAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" emphasis="subtle" size="lg" />}
        {isIconTextAndSubtleAndLgAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" emphasis="subtle" size="lg" />}
        {isIconTextAndBoldAndMdAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" />}
        {isIconTextAndBoldAndMdAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" />}
        {isIconTextAndBoldAndMdAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" />}
        {isIconTextAndSubtleAndMdAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" emphasis="subtle" />}
        {isIconTextAndSubtleAndMdAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" emphasis="subtle" />}
        {isIconTextAndSubtleAndMdAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] min-w-px relative" emphasis="subtle" />}
        {isIconOnlyAndBoldAndLgAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] h-[48px] min-w-px relative" size="lg" variant="icon only" />}
        {isIconOnlyAndBoldAndLgAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] h-[48px] min-w-px relative" size="lg" variant="icon only" />}
        {isIconOnlyAndBoldAndLgAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] h-[48px] min-w-px relative" size="lg" variant="icon only" />}
        {isIconOnlyAndSubtleAndLgAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] h-[48px] min-w-px relative" emphasis="subtle" size="lg" variant="icon only" />}
        {isIconOnlyAndSubtleAndLgAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] h-[48px] min-w-px relative" emphasis="subtle" size="lg" variant="icon only" />}
        {isIconOnlyAndSubtleAndLgAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] h-[48px] min-w-px relative" emphasis="subtle" size="lg" variant="icon only" />}
        {isIconOnlyAndBoldAndMdAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] h-[36px] min-w-px relative" variant="icon only" />}
        {isIconOnlyAndBoldAndMdAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] h-[36px] min-w-px relative" variant="icon only" />}
        {isIconOnlyAndBoldAndMdAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] h-[36px] min-w-px relative" variant="icon only" />}
        {isIconOnlyAndSubtleAndMdAndFixed && control3 && <SegmentedControlButton className="flex-[1_0_0] h-[36px] min-w-px relative" emphasis="subtle" variant="icon only" />}
        {isIconOnlyAndSubtleAndMdAndFixed && control4 && <SegmentedControlButton className="flex-[1_0_0] h-[36px] min-w-px relative" emphasis="subtle" variant="icon only" />}
        {isIconOnlyAndSubtleAndMdAndFixed && control5 && <SegmentedControlButton className="flex-[1_0_0] h-[36px] min-w-px relative" emphasis="subtle" variant="icon only" />}
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[40px] relative size-full">
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-full" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-full" variant="icon only" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-full" emphasis="subtle" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-full" emphasis="subtle" variant="icon only" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-[500px]" size="md" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-[500px]" size="md" variant="icon only" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-[500px]" emphasis="subtle" size="md" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-[500px]" emphasis="subtle" size="md" variant="icon only" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-[300px]" size="md" variant="icon only" />
      <SlSegmentedControlApproach className="bg-white relative rounded-[800px] shrink-0 w-[300px]" emphasis="subtle" size="md" variant="icon only" />
    </div>
  );
}