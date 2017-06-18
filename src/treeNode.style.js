/* eslint-disable quotes */
/* Highlight line for pointing to dragged row destination
 ========================================================================== */
const $highlightColor = '#36C2F6';
const $highlightLineSize = 8; // Make it an even number for clean rendering
const $arrowSize = 12;

const lineBlock = {
    height: "100%",
    position: "relative",
    display: "inline-block",
};

const blackLineBase = {
    position: "absolute",
    content: '',
    backgroundColor: "black",
};

/**
 * +--+--+
 * |  |  |
 * |  |  |
 * |  |  |
 * +--+--+
 */
const lineFullVertical = {
    ':after': {
        ...blackLineBase,
        width: "1px",
        left: "50%",
        top: 0,
        height: "100%",
    },
};

const lineHalfVerticalTop = {
    ...lineFullVertical,

    ':after': {
        top: 0,
        height: "50%",
    },
};

const $baseMultiplier = 10;

const arrowPulse = {
    '0%': {
        transform: `translate(0, 0)`,
        opacity: 0,
    },
    '30%': {
        transform: `translate(0, ${30 * $baseMultiplier}%)`,
        opacity: 1,
    },
    '70%': {
        transform: `translate(0, ${70 * $baseMultiplier}%)`,
        opacity: 1,
    },
    '100%': {
        transform: `translate(0, ${100 * $baseMultiplier}%)`,
        opacity: 0,
    },
};

export default {
    node: {
        minWidth: "100%",
        whiteSpace: "nowrap",
        position: "relative",
        textAlign: "left",
    },

    nodeContent: {
        position: "absolute",
        top: 0,
        bottom: 0,
    },

    /* ==========================================================================
     Scaffold

     LineOverlaid blocks used for showing the tree structure
     ========================================================================== */
    lineBlock: {
        ...lineBlock
    },

    absoluteLineBlock: {
        ...lineBlock,
        position: "absolute",
        top: 0,
    },

    /**
     * +-----+
     * |     |
     * |  +--+
     * |     |
     * +-----+
     */
    lineHalfHorizontalRight: {
        ':before': {
            ...blackLineBase,
            height: "1px",
            top: "50%",
            right: 0,
            width: "50%",
        },
    },

    lineFullVertical: {
        ...lineFullVertical
    },

    /**
     * +-----+
     * |  |  |
     * |  +  |
     * |     |
     * +-----+
     */
    lineHalfVerticalTop: {
        ...lineHalfVerticalTop
    },


    /**
     * +-----+
     * |     |
     * |  +  |
     * |  |  |
     * +-----+
     */
    lineHalfVerticalBottom: {
        ...lineHalfVerticalTop,

        ':after': {
            top: "auto",
            bottom: 0,
        },
    },


    /**
     * +--+--+
     * |  |  |
     * |  |  |
     * |  |  |
     * +--+--+
     */
    highlightLineVertical: {
        zIndex: 3,

        ':before': {
            position: "absolute",
            content: '',
            backgroundColor: $highlightColor,
            width: $highlightLineSize,
            marginLeft: $highlightLineSize / 2,
            left: "50%",
            top: 0,
            height: "100%",
        },
        animationName: arrowPulse,

        ':after': {
            content: '',
            position: "absolute",
            height: 0,
            marginLeft: $highlightLineSize / 2,
            left: "50%",
            top: 0,
            borderLeft: `${$highlightLineSize / 2} solid transparent`,
            borderRight: `${$highlightLineSize / 2} solid transparent`,
            borderTop: `${$highlightLineSize / 2} solid white`,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationFillMode: 'both',
        },
    },

    /**
     * +-----+
     * |     |
     * |  +--+
     * |  |  |
     * +--+--+
     */
    highlightTopLeftCorner: {
        ':before': {
            zIndex: 3,
            content: '',
            position: "absolute",
            borderTop: `solid ${$highlightLineSize} ${$highlightColor}`,
            borderLeft: `solid ${$highlightLineSize} ${$highlightColor}`,
            boxSizing: "border-box",
            height: `calc(50% + ${$highlightLineSize / 2})`,
            top: "50%",
            marginTop: $highlightLineSize / 2,
            right: 0,
            width: `calc(50% + ${$highlightLineSize / 2})`,
        },
    },

    /**
     * +--+--+
     * |  |  |
     * |  |  |
     * |  +->|
     * +-----+
     */
    highlightBottomLeftCorner: {
        zIndex: 3,

        ':before': {
            content: '',
            position: "absolute",
            borderBottom: `solid ${$highlightLineSize} ${$highlightColor}`,
            borderLeft: `solid ${$highlightLineSize} ${$highlightColor}`,
            boxSizing: "border-box",
            height: `calc(100% + ${$highlightLineSize / 2})`,
            top: 0,
            right: $arrowSize,
            width: `calc(50% - ${$arrowSize - ($highlightLineSize / 2)}`,
        },

        ':after': {
            content: '',
            position: "absolute",
            height: 0,
            right: 0,
            top: "100%",
            marginTop: $arrowSize,
            borderTop: `${$arrowSize} solid transparent`,
            borderBottom: `${$arrowSize} solid transparent`,
            borderLeft: `${$arrowSize} solid $highlightColor`,
        },
    },
};
