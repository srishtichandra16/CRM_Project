// State holders
const segments = [];
const campaigns = [
  { id: 1, name: 'Holiday Promo 2024', description: 'Seasonal discounts and offers.' },
  { id: 2, name: 'New Product Launch', description: 'Introducing the latest product line.' },
];

// Elements
const segmentNameInput = document.getElementById('segmentName');
const segmentRuleInput = document.getElementById('segmentRule');
const createSegmentBtn = document.getElementById('createSegmentBtn');
const segmentMessage = document.getElementById('segmentMessage');

const campaignList = document.getElementById('campaignList');

const selectSegment = document.getElementById('selectSegment');
const messageText = document.getElementById('messageText');
const sendMsgBtn = document.getElementById('sendMsgBtn');
const messageLog = document.getElementById('messageLog');

const aiPromptInput = document.getElementById('aiPrompt');
const generateAIMessageBtn = document.getElementById('generateAIMessageBtn');
const aiResponseDiv = document.getElementById('aiResponse');

// Initialize campaigns list
function loadCampaigns() {
  campaignList.innerHTML = '';
  campaigns.forEach(camp => {
    const li = document.createElement('li');
    li.textContent = camp.name + ': ' + camp.description;
    campaignList.appendChild(li);
  });
}

// Update segment dropdown
function updateSegmentDropdown() {
  selectSegment.innerHTML = '<option value="">-- Select Segment --</option>';
  segments.forEach((seg, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = seg.name + ' (' + seg.rule + ')';
    selectSegment.appendChild(option);
  });
}

// Create segment event
createSegmentBtn.addEventListener('click', () => {
  const name = segmentNameInput.value.trim();
  const rule = segmentRuleInput.value.trim();
  if(!name || !rule) {
    segmentMessage.style.color = 'red';
    segmentMessage.textContent = 'Please enter both segment name and rule.';
    return;
  }
  segments.push({ name, rule });
  segmentMessage.style.color = 'green';
  segmentMessage.textContent = `Segment "${name}" created!`;
  segmentNameInput.value = '';
  segmentRuleInput.value = '';
  updateSegmentDropdown();
});

// Send message simulation
sendMsgBtn.addEventListener('click', () => {
  const segIndex = selectSegment.value;
  const msg = messageText.value.trim();
  if(segIndex === '' || !msg) {
    alert('Please select a segment and enter a message.');
    return;
  }
  const segment = segments[segIndex];
  const logEntry = `To Segment "${segment.name}" [Rule: ${segment.rule}]:\n${msg}\n---\n`;
  messageLog.textContent += logEntry;
  messageText.value = '';
  messageLog.scrollTop = messageLog.scrollHeight;
});

// Mock AI generation
generateAIMessageBtn.addEventListener('click', () => {
  const prompt = aiPromptInput.value.trim();
  if(!prompt) {
    aiResponseDiv.textContent = 'Please enter a prompt.';
    return;
  }
  // Fake AI response (mock)
  aiResponseDiv.textContent = 'Generating message for prompt: "' + prompt + '" ...\n\n' + 
    '"Hello valued customer! We have exciting news based on your interests."';
});

// Google login button click (just UI)
document.getElementById('googleLoginBtn').addEventListener('click', () => {
  alert('Google OAuth flow would start here.');
});

// Initialize page
loadCampaigns();
updateSegmentDropdown();


   

