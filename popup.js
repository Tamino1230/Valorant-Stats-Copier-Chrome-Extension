document.getElementById('copyButton').addEventListener('click', async () => {
    try {
        const response = await chrome.runtime.sendMessage({ action: 'fetchValorantInfo' });
        
        await navigator.clipboard.writeText(response.data);
        
        document.getElementById('status').textContent = 'Info copied to clipboard!';
    } catch (error) {
        document.getElementById('status').textContent = 'Failed to copy info.';
        console.error(error);
    }
});