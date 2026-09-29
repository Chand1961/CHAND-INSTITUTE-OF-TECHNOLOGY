
// CHAND INSTITUTE OF TECHNOLOGY
// Website Visitor Tracking

async function recordWebsiteVisit() {
    try {

        const { error } = await supabaseClient
            .from("website_visits")
            .insert([
                {
                    visited_at: new Date().toISOString()
                }
            ]);

        if (error) {
            console.error("Visitor tracking error:", error);
            return;
        }

        console.log("Website visit recorded successfully.");

    } catch (error) {

        console.error("Visitor tracking failed:", error);

    }
}

// Record visitor
recordWebsiteVisit();
```
