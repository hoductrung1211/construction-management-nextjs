Press Ctrl + Shift + V to preview `.md` file.

# API Request
1. Labors param URL is Vietnamese???

    /search?labor=Giám sát&name
    
    -> Lý do không để ID là ID nó thay đổi thì sao?

# API returned
1. Construction Site
- There hasn't had createdDate in API response yet.

2. Cost Estiamte
- These are missed fields in Cost Estimate API response:
    - creator.
    - createdDate.
    - Total number of work item (can be updated later).
    - Total cost (can be updated later).

# API Form Body
- Date phải truyền theo dạng string: 

# Front-end
1. Approver Popup
- Filter by Name or ID.
2. Labor Popup
- Sync data on Popup with root component.