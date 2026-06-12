namespace EATMS.Domain.Entities
{
    public class TaskItem
    {
        public int Id { get; set;}

        public string Title { get; set;}

        public string Description {get; set;}

        public string Status {get; set;}

        public DateTime DueDate { get; set;}

        public int AssignedToUserId { get; set;}
    }
}