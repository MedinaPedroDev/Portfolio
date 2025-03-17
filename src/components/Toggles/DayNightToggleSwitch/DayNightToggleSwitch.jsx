import React from 'react'

function DayNightToggleSwitch() {
    return (
        <div class="toggle-switch">
            <label class="switch-label">
                <input type="checkbox" class="checkbox" />
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default DayNightToggleSwitch