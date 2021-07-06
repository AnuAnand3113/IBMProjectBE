select [id],
        [test]
FROM [dbo].[events]
WHERE [userId] = @userId
